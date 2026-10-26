# `parseEmailTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716274-716286](../../../../../../reference/runtime/host-main.cjs#L716274-L716286) | `FunctionDeclaration` | não | `value` |
| [evaluation:527957-527969](../../../../../../reference/runtime/sand-eval-runner.cjs#L527957-L527969) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716274-716286](../../../../../../reference/runtime/host-main.cjs#L716274-L716286) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:527957-527969](../../../../../../reference/runtime/sand-eval-runner.cjs#L527957-L527969) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:716274

Chamadas escritas diretamente neste corpo: `normalizeEmailAddress`, `parseEmailFromAddresses`, `triggerParseFailure`.

SHA-256 do trecho: `fc9b34a795f9c8ede5f57488e6c0a656e26709154b0ac64f862ea570722c0e8f`.

### evaluation:527957

Chamadas escritas diretamente neste corpo: `normalizeEmailAddress`, `parseEmailFromAddresses`, `triggerParseFailure`.

SHA-256 do trecho: `fc9b34a795f9c8ede5f57488e6c0a656e26709154b0ac64f862ea570722c0e8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
