describe('amazon calculator',() => {
    it('should posts result from json placeholder', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(100)
        })
    });

    it('should get posts/1 from json placeholder', () => {
        const expectedBody = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        cy.request('https://jsonplaceholder.typicode.com/posts/1').then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.eql(expectedBody)
        })
    });

    it('should post new post to json placeholder', () => {
        const body = {
            "userId": 99,
            "title": "test title",
            "body": "test body"
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', body).then(response => {
            expect(response.status).to.eq(201)
            expect(response.body.userId).to.be.equal(body.userId);
            expect(response.body.id).to.be.equal(101);
            expect(response.body.title).to.be.equal(body.title);
            expect(response.body.body).to.be.equal(body.body);
        })
    });

    it('should delete post to json placeholder', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then(response => {
            expect(response.status).to.eq(200)
        })
    });
})
