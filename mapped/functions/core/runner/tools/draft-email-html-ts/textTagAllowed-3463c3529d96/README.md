# `textTagAllowed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732484-732489](../../../../../../../reference/runtime/host-main.cjs#L732484-L732489) | `FunctionDeclaration` | não | `tag` |
| [evaluation:539496-539501](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539496-L539501) | `FunctionDeclaration` | não | `tag` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732484-732489](../../../../../../../reference/runtime/host-main.cjs#L732484-L732489) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539496-539501](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539496-L539501) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:732484

Chamadas escritas diretamente neste corpo: `.every`, `TEXT_ELEMENTS.has`.

SHA-256 do trecho: `c01f911eac7b117e6f0fbd7e460d997abeea2eb83fca69261539e52a5bde65a6`.

### evaluation:539496

Chamadas escritas diretamente neste corpo: `.every`, `TEXT_ELEMENTS.has`.

SHA-256 do trecho: `c01f911eac7b117e6f0fbd7e460d997abeea2eb83fca69261539e52a5bde65a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
