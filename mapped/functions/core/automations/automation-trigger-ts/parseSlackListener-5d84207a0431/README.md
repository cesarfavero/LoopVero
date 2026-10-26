# `parseSlackListener`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716067-716075](../../../../../../reference/runtime/host-main.cjs#L716067-L716075) | `FunctionDeclaration` | não | `value` |
| [evaluation:527750-527758](../../../../../../reference/runtime/sand-eval-runner.cjs#L527750-L527758) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716067-716075](../../../../../../reference/runtime/host-main.cjs#L716067-L716075) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527750-527758](../../../../../../reference/runtime/sand-eval-runner.cjs#L527750-L527758) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:716067

Chamadas escritas diretamente neste corpo: `isTriggerParseFailure`, `normalizeScopeToken`, `parseSlackMatch`, `triggerParseFailure`.

SHA-256 do trecho: `3b74fd11e4f404dfd600af203d349dd5eaf3f31201cc045f880deb147f8aab08`.

### evaluation:527750

Chamadas escritas diretamente neste corpo: `isTriggerParseFailure`, `normalizeScopeToken`, `parseSlackMatch`, `triggerParseFailure`.

SHA-256 do trecho: `3b74fd11e4f404dfd600af203d349dd5eaf3f31201cc045f880deb147f8aab08`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
