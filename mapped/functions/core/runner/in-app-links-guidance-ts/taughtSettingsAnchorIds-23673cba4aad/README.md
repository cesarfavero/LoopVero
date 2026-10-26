# `taughtSettingsAnchorIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557707-557709](../../../../../../reference/runtime/host-main.cjs#L557707-L557709) | `FunctionDeclaration` | não | `facts` |
| [evaluation:546143-546145](../../../../../../reference/runtime/sand-eval-runner.cjs#L546143-L546145) | `FunctionDeclaration` | não | `facts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557707-557709](../../../../../../reference/runtime/host-main.cjs#L557707-L557709) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546143-546145](../../../../../../reference/runtime/sand-eval-runner.cjs#L546143-L546145) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557707

Chamadas escritas diretamente neste corpo: `.map`, `taughtSettingsRows`.

SHA-256 do trecho: `847d045877ee018521243c49d46c520846d3d7980b1d053a4b65cf0a08667b95`.

### evaluation:546143

Chamadas escritas diretamente neste corpo: `.map`, `taughtSettingsRows`.

SHA-256 do trecho: `847d045877ee018521243c49d46c520846d3d7980b1d053a4b65cf0a08667b95`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
