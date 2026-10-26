# `describeCloudAgentSecretForwardRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-secret-forward.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-secret-forward-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:567132-567155](../../../../../../reference/runtime/sand-eval-runner.cjs#L567132-L567155) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567132-567155](../../../../../../reference/runtime/sand-eval-runner.cjs#L567132-L567155) | 10 | 0 | 0 | 8 | 0 | 0 |

### evaluation:567132

Chamadas escritas diretamente neste corpo: `error63.availableNames.join`, `error63.unknownNames.join`.

SHA-256 do trecho: `6dbfe63223a174ff4a7fba71e40dbebbb56501030105221dfff821ce6a70da99`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
