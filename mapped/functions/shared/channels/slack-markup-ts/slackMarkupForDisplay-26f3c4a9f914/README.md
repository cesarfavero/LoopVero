# `slackMarkupForDisplay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/slack-markup.ts` · [README do módulo](../../../../../modules/shared/channels/slack-markup-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721618-721641](../../../../../../reference/runtime/host-main.cjs#L721618-L721641) | `FunctionDeclaration` | não | `text3, options2 = {}` |
| [evaluation:539870-539893](../../../../../../reference/runtime/sand-eval-runner.cjs#L539870-L539893) | `FunctionDeclaration` | não | `text3, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721618-721641](../../../../../../reference/runtime/host-main.cjs#L721618-L721641) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539870-539893](../../../../../../reference/runtime/sand-eval-runner.cjs#L539870-L539893) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:721618

Chamadas escritas diretamente neste corpo: `mapProse`, `text3.includes`.

SHA-256 do trecho: `d1876ab2c256c2f4f4f2203f601ad8ec2b3bb3f35a1e38473d9c7d6a6dc28ef9`.

### evaluation:539870

Chamadas escritas diretamente neste corpo: `mapProse`, `text3.includes`.

SHA-256 do trecho: `d1876ab2c256c2f4f4f2203f601ad8ec2b3bb3f35a1e38473d9c7d6a6dc28ef9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
