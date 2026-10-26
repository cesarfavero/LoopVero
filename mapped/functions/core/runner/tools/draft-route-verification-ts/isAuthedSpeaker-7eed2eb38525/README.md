# `isAuthedSpeaker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735181-735184](../../../../../../../reference/runtime/host-main.cjs#L735181-L735184) | `FunctionDeclaration` | não | `person, selfEmail, selfNames` |
| [evaluation:540755-540758](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540755-L540758) | `FunctionDeclaration` | não | `person, selfEmail, selfNames` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735181-735184](../../../../../../../reference/runtime/host-main.cjs#L735181-L735184) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540755-540758](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540755-L540758) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:735181

Chamadas escritas diretamente neste corpo: `person.email.toLowerCase`, `person.name.toLowerCase`, `selfNames.includes`.

SHA-256 do trecho: `a6fda74db5f98003d50c6b018bba6731be4cf21b57a20bf5357a7a9e884c2e51`.

### evaluation:540755

Chamadas escritas diretamente neste corpo: `person.email.toLowerCase`, `person.name.toLowerCase`, `selfNames.includes`.

SHA-256 do trecho: `a6fda74db5f98003d50c6b018bba6731be4cf21b57a20bf5357a7a9e884c2e51`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
