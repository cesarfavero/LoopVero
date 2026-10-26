# `getSandProductionRootDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/host-paths.ts` · [README do módulo](../../../../modules/core/host-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430899-430901](../../../../../reference/runtime/host-main.cjs#L430899-L430901) | `FunctionDeclaration` | não | `homeDir = (0, import_node_os.homedir)()` |
| [evaluation:530491-530493](../../../../../reference/runtime/sand-eval-runner.cjs#L530491-L530493) | `FunctionDeclaration` | não | `homeDir = (0, import_node_os8.homedir)()` |
| [state-worker:410-412](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L410-L412) | `FunctionDeclaration` | não | `homeDir = (0, import_node_os.homedir)()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430899-430901](../../../../../reference/runtime/host-main.cjs#L430899-L430901) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530491-530493](../../../../../reference/runtime/sand-eval-runner.cjs#L530491-L530493) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:410-412](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L410-L412) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:430899

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `f53101cf987e16f2ed65085269ed27d15f418325c727be418d3907d590be49e9`.

### evaluation:530491

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `71b8dada3417863c31db65a0a5412c4e918f04c393e2cda8636d944f8e0e4a8c`.

### state-worker:410

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `1f6e7842f1e2d7a3ec24f254ebbcfc081274265335fd889f164804ed19028962`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
