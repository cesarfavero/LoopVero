# `emailHtmlMatchesBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732490-732497](../../../../../../../reference/runtime/host-main.cjs#L732490-L732497) | `FunctionDeclaration` | não | `{   html,   body }` |
| [evaluation:539502-539509](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539502-L539509) | `FunctionDeclaration` | não | `{   html,   body }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732490-732497](../../../../../../../reference/runtime/host-main.cjs#L732490-L732497) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539502-539509](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539502-L539509) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732490

Chamadas escritas diretamente neste corpo: `.map`, `body.split`, `bodyWords`, `matchesBodyWords`, `new Set`, `readHtml`, `reading.targets.every`.

SHA-256 do trecho: `785b9d0419c1a1d629670808fb0f16b918aa598c99d2bdd36699f3a8cd62f13e`.

### evaluation:539502

Chamadas escritas diretamente neste corpo: `.map`, `body.split`, `bodyWords`, `matchesBodyWords`, `new Set`, `readHtml`, `reading.targets.every`.

SHA-256 do trecho: `785b9d0419c1a1d629670808fb0f16b918aa598c99d2bdd36699f3a8cd62f13e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
