# Original reference

Os arquivos abaixo são a evidência primária do estudo. Os caminhos foram reorganizados com nomes próprios; os conteúdos e modos Git dos 1.070 arquivos registrados no [manifesto](../mapped/inventory/original-files.json) permanecem iguais aos do snapshot de referência.

| Caminho | Responsabilidade |
| --- | --- |
| [runtime/host-main.cjs](runtime/host-main.cjs) | Host, gateway, extensões, proxy remoto, stores e código compartilhado compilado |
| [runtime/sand-eval-runner.cjs](runtime/sand-eval-runner.cjs) | Executor de avaliação com loop, composição de sessão e ferramentas, subagentes e encerramento |
| [runtime/workers/state/agent-store-worker.cjs](runtime/workers/state/agent-store-worker.cjs) | Worker de persistência por agente |
| `runtime/workers/services/` | Workers auxiliares de sincronização, busca e telemetria |
| `runtime/scripts/` | Scripts auxiliares de ambiente e ferramentas |
| `runtime/launchers/` | Launchers fornecidos no snapshot |
| `runtime/node_modules/` | Dependências vendorizadas do runtime, mantidas como evidência |
| `dependencies/` | Dependências e componentes nativos fornecidos no snapshot |
| `documents/native/` | Suporte nativo a documentos |
| `documents/typescript/` | Suporte a documentos em TypeScript compilado |

## Preservação

O manifesto registra caminho atual, tamanho, modo Git e SHA-1 do blob original. SHA-1 aqui identifica o objeto Git, calculado sobre `blob <tamanho>\0<bytes>`, e não apenas um hash solto do conteúdo. O índice dos três bundles centrais também registra SHA-256.

Os binários, dependências, avisos de licença e nomes internos permanecem no acervo. Metadados do Finder e um placeholder vazio foram excluídos por não pertencerem ao funcionamento do harness.

Esta organização é destinada ao estudo. Mudanças de diretórios podem invalidar caminhos relativos que um runtime usaria para localizar workers e scripts. Nenhum arquivo original foi adaptado para tornar a nova disposição um produto executável.

[Guia completo](../guide/README.md) · [Método](../guide/methodology/README.md) · [Mapa](../mapped/README.md)
