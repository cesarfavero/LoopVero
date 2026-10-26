# `pickTheOnlyPreferredRoleRefWhoseNameIsEntirelyContainedInTheLabel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727020-727036](../../../../../../../reference/runtime/host-main.cjs#L727020-L727036) | `FunctionDeclaration` | não | `lines2, needle, preferredRole` |
| [evaluation:561631-561647](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561631-L561647) | `FunctionDeclaration` | não | `lines2, needle, preferredRole` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727020-727036](../../../../../../../reference/runtime/host-main.cjs#L727020-L727036) | 5 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:561631-561647](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561631-L561647) | 5 | 1 | 0 | 4 | 0 | 0 |

### host:727020

Chamadas escritas diretamente neste corpo: `SNAPSHOT_LINE_NAME_PATTERN.exec`, `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `nameWords.every`, `new Set`, `wordsOfLabelAfterCollapsingEmailAddressAndPhoneNumber`.

Alvos de atribuição ou incremento: `only`.

SHA-256 do trecho: `4759b19cf76f4af72b787406ea1501d01c1bea8ca770388564141cf737c12a8a`.

### evaluation:561631

Chamadas escritas diretamente neste corpo: `SNAPSHOT_LINE_NAME_PATTERN.exec`, `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `nameWords.every`, `new Set`, `wordsOfLabelAfterCollapsingEmailAddressAndPhoneNumber`.

Alvos de atribuição ou incremento: `only`.

SHA-256 do trecho: `4759b19cf76f4af72b787406ea1501d01c1bea8ca770388564141cf737c12a8a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
