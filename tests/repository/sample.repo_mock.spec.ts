import SampleRepositoryMock from "../../app/repository/sample.repo_mock"

test("Sample Repository Mock", () => {
    const sampleRepo = new SampleRepositoryMock();

    sampleRepo.insert({ name: "Taha", age: 15 })
    sampleRepo.insert({ name: "Max", age: 20 })
    sampleRepo.insert({ name: "John", age: 50 })

    sampleRepo.getAll().then((response) => {
        expect(response.length).toBe(3);
    });
})
