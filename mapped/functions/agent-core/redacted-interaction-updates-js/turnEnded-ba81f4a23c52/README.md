# `turnEnded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/redacted-interaction-updates.js` · [README do módulo](../../../../modules/agent-core/redacted-interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615763-615781](../../../../../reference/runtime/host-main.cjs#L615763-L615781) | `FunctionExpression` | não | `privacyMode, usage, endedAtMs` |
| [evaluation:284483-284501](../../../../../reference/runtime/sand-eval-runner.cjs#L284483-L284501) | `FunctionExpression` | não | `privacyMode, usage, endedAtMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615763-615781](../../../../../reference/runtime/host-main.cjs#L615763-L615781) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284483-284501](../../../../../reference/runtime/sand-eval-runner.cjs#L284483-L284501) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:615763

Chamadas escritas diretamente neste corpo: `BigInt`.

SHA-256 do trecho: `c715f28d02a126ab7fd4e19569bd7f13a9b5a311c69b1f618188e21e2bd8cd2a`.

### evaluation:284483

Chamadas escritas diretamente neste corpo: `BigInt`.

SHA-256 do trecho: `c715f28d02a126ab7fd4e19569bd7f13a9b5a311c69b1f618188e21e2bd8cd2a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
