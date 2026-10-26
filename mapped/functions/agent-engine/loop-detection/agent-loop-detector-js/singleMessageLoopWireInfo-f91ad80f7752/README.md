# `singleMessageLoopWireInfo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624615-624624](../../../../../../reference/runtime/host-main.cjs#L624615-L624624) | `FunctionDeclaration` | não | `options2` |
| [evaluation:310747-310756](../../../../../../reference/runtime/sand-eval-runner.cjs#L310747-L310756) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624615-624624](../../../../../../reference/runtime/host-main.cjs#L624615-L624624) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:310747-310756](../../../../../../reference/runtime/sand-eval-runner.cjs#L310747-L310756) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:624615

Chamadas escritas diretamente neste corpo: `String`.

Alvos de atribuição ou incremento: `info2[computed]`.

SHA-256 do trecho: `ff3868da203b4d808aea89982e1bf330a83d8ace6964cca19527fc50928655bc`.

### evaluation:310747

Chamadas escritas diretamente neste corpo: `String`.

Alvos de atribuição ou incremento: `info2[computed]`.

SHA-256 do trecho: `ff3868da203b4d808aea89982e1bf330a83d8ace6964cca19527fc50928655bc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
