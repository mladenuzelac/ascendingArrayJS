describe("Ascending array unit test", function() {

	it("solution should return random number", function () {

		input = [2,2,2,2,1,2,-1,2,1,3]
		result = [4,6,8]

		// spyOn()

		// expect(result).toContain(solution(input));
		expect(result).toEqual(solution(input));
	});
});