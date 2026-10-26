# `parseTriggerPresentation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716472-716479](../../../../../../reference/runtime/host-main.cjs#L716472-L716479) | `FunctionDeclaration` | não | `value, trigger2` |
| [evaluation:627186-627193](../../../../../../reference/runtime/sand-eval-runner.cjs#L627186-L627193) | `FunctionDeclaration` | não | `value, trigger` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716472-716479](../../../../../../reference/runtime/host-main.cjs#L716472-L716479) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627186-627193](../../../../../../reference/runtime/sand-eval-runner.cjs#L627186-L627193) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:716472

Chamadas escritas diretamente neste corpo: `isTriggerParseFailure`, `isUnknownRecord2`, `parseStoredTrigger`, `triggerIdentity`.

SHA-256 do trecho: `3bce5670f3f830d3311c961a29fd1de0fc133130b0d9e45e25822d4ac003385a`.

### evaluation:627186

Chamadas escritas diretamente neste corpo: `isTriggerParseFailure`, `isUnknownRecord2`, `parseStoredTrigger`, `triggerIdentity`.

SHA-256 do trecho: `246a34ddbca3fe505b21c8af3073436f5a7c9d66930bd8b470441f83f36e6c71`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
