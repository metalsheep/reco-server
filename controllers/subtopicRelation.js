class Relation {
    constructor(parent, subtopic, links = 0) {
        this.parent = parent;
        this.subtopic = subtopic;
        this.links = links;
    }

    addLink() {
        // increase link count
        this.links++;
        return this;
    }
}

class User {
    constructor(id) {
        this.id = id;
        this.listenedTo = {};
    }

    listen(listen) {
        this.listenedTo[listen.subtopic] = (this.listenedTo[listen.subtopic] || 0) + 1;
    }
}

class RelationTable {
    constructor(listens, subtopics) {
        this.subtopicIDs = subtopics.map( st => st.id );
        this.subtopicIDs.forEach( id => {
            this[id] = this.subtopicIDs.map( st => new Relation(id, st) );
        });
    }
}

function subtopicRelations(subtopic) {
    var relations = [
        new Relation(subtopic, 1, 1)
    ];

    return relations;
}

module.exports = subtopicRelations;
module.exports.internals = {
    Relation,
    User,
    RelationTable
};