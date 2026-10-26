# `getAgentAssetsDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/attachment-paths.ts` · [README do módulo](../../../../modules/core/attachment-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494817-494819](../../../../../reference/runtime/host-main.cjs#L494817-L494819) | `FunctionDeclaration` | não | `agentDir` |
| [evaluation:530337-530339](../../../../../reference/runtime/sand-eval-runner.cjs#L530337-L530339) | `FunctionDeclaration` | não | `agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494817-494819](../../../../../reference/runtime/host-main.cjs#L494817-L494819) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530337-530339](../../../../../reference/runtime/sand-eval-runner.cjs#L530337-L530339) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494817

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `7bddfff931a50fe2cebce49254d7f595010a02aa121ac978e86303218a56f3ac`.

### evaluation:530337

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `b7d2658b3be9a355bd8802941b9629a0c3ae074ee397b78d2005a2d7af7f52b6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
