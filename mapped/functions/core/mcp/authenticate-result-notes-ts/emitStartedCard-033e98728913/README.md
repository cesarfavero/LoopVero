# `emitStartedCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/authenticate-result-notes.ts` · [README do módulo](../../../../../modules/core/mcp/authenticate-result-notes-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779340-779343](../../../../../../reference/runtime/host-main.cjs#L779340-L779343) | `FunctionDeclaration` | sim | `request5, emission, armAuthWait` |
| [evaluation:579514-579517](../../../../../../reference/runtime/sand-eval-runner.cjs#L579514-L579517) | `FunctionDeclaration` | sim | `request3, emission, armAuthWait` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779340-779343](../../../../../../reference/runtime/host-main.cjs#L779340-L779343) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:579514-579517](../../../../../../reference/runtime/sand-eval-runner.cjs#L579514-L579517) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:779340

Chamadas escritas diretamente neste corpo: `request5.emitConnectorCard`.

SHA-256 do trecho: `2d0b927a23f866d082efe81b3415e50b7d19d9dd6f10971b75c7377faa849ea6`.

### evaluation:579514

Chamadas escritas diretamente neste corpo: `request3.emitConnectorCard`.

SHA-256 do trecho: `4885956dc15300a4046192345f3d8ddd2b0d25be12affc61930f976ca6b25b0c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
