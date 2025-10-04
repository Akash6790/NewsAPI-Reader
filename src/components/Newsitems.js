import React, { Component } from 'react'

export class Newsitems extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="container me-5 p-2 ">
                <div className="card m-3 p-2" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://deadline.com/wp-content/uploads/2025/09/MixCollage-25-Sep-2025-10-53-AM-6889.jpg?w=1024" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitems;
