# `entityText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732573-732577](../../../../../../../reference/runtime/host-main.cjs#L732573-L732577) | `FunctionDeclaration` | não | `name18` |
| [evaluation:539585-539589](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539585-L539589) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732573-732577](../../../../../../../reference/runtime/host-main.cjs#L732573-L732577) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539585-539589](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539585-L539589) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:732573

Chamadas escritas diretamente neste corpo: `Number`, `String.fromCodePoint`, `name18.slice`, `name18.startsWith`, `parseInt`.

SHA-256 do trecho: `72da96ba4defa8c24b9399171b3ad3d70d3ae1d3673e4c686de7c57442913f74`.

### evaluation:539585

Chamadas escritas diretamente neste corpo: `Number`, `String.fromCodePoint`, `name18.slice`, `name18.startsWith`, `parseInt`.

SHA-256 do trecho: `72da96ba4defa8c24b9399171b3ad3d70d3ae1d3673e4c686de7c57442913f74`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
