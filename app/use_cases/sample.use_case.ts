import sampleRepo from "../repository/sample.repo";

function getAll() {
    return sampleRepo.find();
}

export default Object.freeze({ getAll });
