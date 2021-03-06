import ApplicationEntity = require('./app');
import GitLab = require('../../lib/gitlab/index');

/**
 * Class for modifying logs in the database
 * Logbook Attributes:
 *      id,
 *      name,
 *      is_tag=0,
 *      owner,
 *      state
 */
class Logbooks extends ApplicationEntity {

    // gitlab connection
    private _gitlab: any;

    constructor(tablename: string, connection: any) {
        super(tablename, connection);

        this._gitlab = new GitLab(connection.gitlab.privateToken, connection.gitlab.namespaceId);
    }

    /**
     * Returns all rows of tags
     * @param page
     * @param callback
     * @returns {IQuery}
     */
    public all(page: any, callback: any) {
        return this._gitlab.groupDetails(callback);
        //this.fileManager.getDirFiles(this.conn.pathName, true, function(res : any){
        //    return callback(null, res);
        //});
    }


    /**
     * Selects a logbook by name
     * @param tagname
     * @param callback
     * @returns {IQuery}
     */
    public getByName(tagname: string, callback: any) {
        return this._gitlab.projectDetails(
            callback);
    }

    /**
     * Updates a tag with the given ID
     * @param id
     * @param params
     * @param callback
     * @returns {IQuery}
     */
    public update(id: number, params: any, callback: any) {
            //
    }

    /**
     * Updates a tag with the given ID
     * @param tagName
     * @param params
     * @param callback
     * @returns {IQuery}
     */
    public updateByName(name: string, params: any, callback: any) {
        return callback(this.fileManager.renameFolder(name, params.name, this.conn.pathName));

    }

    /**
     * Inserts a row into the logbook table
     * @param params
     * @param callback
     * @returns {IQuery}
     */
    public insert(params: any, callback: any) {
        return callback(this.fileManager.writeFolder(params.name, this.conn.pathName));
    }

    /**
     * Deletes a row from the table
     * @param id
     * @param callback
     * @returns {IQuery}
     */
    public destroy(id: number, callback: any) {

    }

    /**
     * Deletes a row from the table
     * @param tagname
     * @param callback
     * @returns {IQuery}
     */
    public destroybyName(tagname: string, callback: any) {

    }

}

export = Logbooks;
