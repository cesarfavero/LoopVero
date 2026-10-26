# `slackName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/slack-markup.ts` · [README do módulo](../../../../../modules/shared/channels/slack-markup-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721598-721602](../../../../../../reference/runtime/host-main.cjs#L721598-L721602) | `FunctionDeclaration` | não | `value` |
| [evaluation:539850-539854](../../../../../../reference/runtime/sand-eval-runner.cjs#L539850-L539854) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721598-721602](../../../../../../reference/runtime/host-main.cjs#L721598-L721602) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539850-539854](../../../../../../reference/runtime/sand-eval-runner.cjs#L539850-L539854) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:721598

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `nonEmpty`, `value.replace`.

SHA-256 do trecho: `fa31de37234fcb7b829c284598ce1cafb4efe6d93065905b7dac004a44bf51a2`.

### evaluation:539850

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `nonEmpty`, `value.replace`.

SHA-256 do trecho: `fa31de37234fcb7b829c284598ce1cafb4efe6d93065905b7dac004a44bf51a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
