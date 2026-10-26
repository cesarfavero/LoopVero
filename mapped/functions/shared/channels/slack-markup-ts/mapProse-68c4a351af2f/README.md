# `mapProse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/slack-markup.ts` · [README do módulo](../../../../../modules/shared/channels/slack-markup-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721595-721597](../../../../../../reference/runtime/host-main.cjs#L721595-L721597) | `FunctionDeclaration` | não | `text3, render2` |
| [evaluation:539847-539849](../../../../../../reference/runtime/sand-eval-runner.cjs#L539847-L539849) | `FunctionDeclaration` | não | `text3, render2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721595-721597](../../../../../../reference/runtime/host-main.cjs#L721595-L721597) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539847-539849](../../../../../../reference/runtime/sand-eval-runner.cjs#L539847-L539849) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:721595

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `text3.split`.

SHA-256 do trecho: `214864e644ebbbe54a0b360dfde9abfb372deec7ec94b606d18008d7b9ab206b`.

### evaluation:539847

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `text3.split`.

SHA-256 do trecho: `214864e644ebbbe54a0b360dfde9abfb372deec7ec94b606d18008d7b9ab206b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
