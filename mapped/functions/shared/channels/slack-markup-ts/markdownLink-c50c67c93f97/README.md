# `markdownLink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/slack-markup.ts` · [README do módulo](../../../../../modules/shared/channels/slack-markup-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721612-721617](../../../../../../reference/runtime/host-main.cjs#L721612-L721617) | `FunctionDeclaration` | não | `url2, label` |
| [evaluation:539864-539869](../../../../../../reference/runtime/sand-eval-runner.cjs#L539864-L539869) | `FunctionDeclaration` | não | `url2, label` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721612-721617](../../../../../../reference/runtime/host-main.cjs#L721612-L721617) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539864-539869](../../../../../../reference/runtime/sand-eval-runner.cjs#L539864-L539869) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:721612

Chamadas escritas diretamente neste corpo: `.replaceAll`, `label.trim`, `nonEmpty`, `text3.replace`, `url2.replaceAll`.

SHA-256 do trecho: `48b100ecb33e003eec3e93a500f5011b3e9a7f555608894e5eb12f223646ffbb`.

### evaluation:539864

Chamadas escritas diretamente neste corpo: `.replaceAll`, `label.trim`, `nonEmpty`, `text3.replace`, `url2.replaceAll`.

SHA-256 do trecho: `48b100ecb33e003eec3e93a500f5011b3e9a7f555608894e5eb12f223646ffbb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
