









<Row form className="row justify-content-center">
                    <Col xl={8} sm={8} md={8} >
                        <FormGroup >
                            <Label for="title"><h5>Title</h5></Label>
                            <Input   invalid={this.state.submitDisabled} type="title" name="title" id="title" placeholder="Title For Quest"  value={this.state.title} onChange={this.onChange}/>
                            <FormText>(max 100 Characters)</FormText>
                            <FormFeedback invalid={this.state.submitDisabled}>{this.state.errorMessage}</FormFeedback>
                        </FormGroup>
                    </Col> 
            </Row>
            <Row form className="row justify-content-center">
                <Col xl={12} sm={10} md={12}>
                    <FormGroup >
                        <Label  for="description"><h5>Description</h5></Label>
                        <Input type="textarea" name="description" id="description" placeholder="Specify What the Quest is About" value={this.state.description} onChange={this.onChange}/>
                        <FormText>(max 110 Characters)</FormText>
                    </FormGroup>
                </Col> 
            </Row>
               
            <Row form className="row justify-content-center">
                <Col xl={4} sm={8}  md={8}>
                    <FormGroup>
                        <Label for="date"><h5>Date</h5></Label>
                        <Input type="date" name="date" id="date" value={this.state.date} min={new Date().toISOString().split("T")[0]} onChange={this.onChange}/>
                    </FormGroup>
                </Col> 
            </Row>