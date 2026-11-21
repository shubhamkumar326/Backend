class ApiResponse {
    counstructor(
        statusCodE,
         message="SUCCESS",
          data
    ) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode < 400;
    }
}