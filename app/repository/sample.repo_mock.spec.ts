import SampleRepositoryMock from "./sample.repo_mock"

test("Sample Repository Mock", () => {
    const sampleRepo = new SampleRepositoryMock();

    sampleRepo.insert({ name: "Taha", age: 15 })
    sampleRepo.insert({ name: "Max", age: 20 })
    sampleRepo.insert({ name: "John", age: 50 })

    sampleRepo.getAll().then((response) => {
        expect(response.length).toBe(3);
    });

    sampleRepo.find("Taha").then(sample => {
        expect(sample.name).toBe("Taha");
        expect(sample.age).toBe(15);
    })
})
