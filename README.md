# NodeRestAPI
How to Build a RESTful API Using Node, Express, and MongoDB.

## API ENDPOINTS
- Posting data to Database.
- Getting all the data from the Database.
- Getting data based on the ID.
- Updating data based on the ID.
- Deleting data based on the ID.

```python
# Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
})

# Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

# Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

# Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

# Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})
```