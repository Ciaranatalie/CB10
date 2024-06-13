document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = 'https://api.escuelajs.co/api/v1/products';

    const buttonSendEl = document.getElementById('buttonSend');
    const buttonDeleteEl = document.getElementById('buttonDelete');
    const inputIdDelete = document.getElementById('deleteId');

    async function createProduct(productData) {
        try {
            console.log('Sending request with data:', productData);
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();
            console.log('Response from server:', data);
            console.log('Created Product ID:', data.id);
            return data.id;
        } catch (error) {
            console.error('Error creating product:', error);
        }
    }

    async function deleteProduct(id) {
        const deleteURL = `${BASE_URL}/${id}`;

        try {
            const response = await fetch(deleteURL, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                console.log('Product deleted successfully');
                const feedback = document.getElementById('deleteFeedback');
                feedback.style.display = 'block';
                setTimeout(() => {
                    feedback.style.display = 'none';
                }, 3000);
            } else {
                console.error('Error deleting product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    buttonSendEl.addEventListener('click', async (event) => {
        event.preventDefault();

        const productData = {
            title: document.getElementById('title').value,
            price: parseFloat(document.getElementById('price').value),
            description: document.getElementById('description').value,
            categoryId: parseInt(document.getElementById('categoryId').value),
            images: [document.getElementById('image').value]
        };

        const productId = await createProduct(productData);
        console.log('Product created with ID:', productId);
    });

    buttonDeleteEl.addEventListener('click', async () => {
        const id = parseInt(inputIdDelete.value);
        await deleteProduct(id);
    });
});
