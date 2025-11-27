<<<<<<< HEAD
import db from "../Database/db.js";
import crypto from 'node:crypto';
class Usuarios {
  constructor() {}
  adicionar(usuario) {
    const uuid = crypto.randomUUID();
    const stmt = db.prepare(`
        INSERT INTO usuarios (uuid, nome, idade, sync_status)
        VALUES (?, ?, ?, ?)
      `);
      const info = stmt.run(
        uuid,
        usuario.nome,
        usuario.idade,
        0
      );
      return info.lastInsertRowid;
  }
  async listar() {
    const stmt = db.prepare(`SELECT * FROM usuarios WHERE excluido_em IS NULL`);
    return stmt.all();
  }
  async buscarPorId(uuid){
    const stmt = db.prepare(`SELECT * FROM usuarios WHERE uuid = ? AND excluido_em IS NULL`);
    return stmt.get(uuid);
  }
  async atualizar(usuarioAtualizado){
    const stmt = db.prepare(`UPDATE usuarios 
      SET nome = ?, 
      idade = ?, 
      atualizado_em = CURRENT_TIMESTAMP, 
      sync_status = 0 WHERE uuid = ?`);
      const info = stmt.run(
        usuarioAtualizado.nome,
        usuarioAtualizado.idade,
        usuarioAtualizado.uuid
      )
      return info.changes;
      
  }

  async remover(usuario) {
    const stmt = db.prepare(`UPDATE usuarios 
      SET excluido_em = CURRENT_TIMESTAMP, 
      sync_status = 0 WHERE uuid = ?`);
      const info = stmt.run(usuario.uuid)
      return info.changes > 0 ? true : false;
=======
class Usuarios {
  constructor() {
    this.Usuarios = [
      {"nome": "jose", "idade": 26},
      {"nome": "maria", "idade": 35},
    ];
  }
  adicionar(usuario) {
    this.Usuarios.push(usuario);
  }
  async listar() {
    return this.Usuarios;
  }
  remover(usuario) {
    const index = this.Usuarios.indexOf(usuario);
    if (index !== -1) {
      this.Usuarios.splice(index, 1);
    }
>>>>>>> 8c9d4ed323edd566bd982517213d34adfde82106
  }
}
export default Usuarios;