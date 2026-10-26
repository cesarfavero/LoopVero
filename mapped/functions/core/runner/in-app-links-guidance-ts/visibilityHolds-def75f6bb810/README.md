# `visibilityHolds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557664-557669](../../../../../../reference/runtime/host-main.cjs#L557664-L557669) | `FunctionDeclaration` | não | `visibility, facts` |
| [evaluation:546108-546113](../../../../../../reference/runtime/sand-eval-runner.cjs#L546108-L546113) | `FunctionDeclaration` | não | `visibility, facts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557664-557669](../../../../../../reference/runtime/host-main.cjs#L557664-L557669) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:546108-546113](../../../../../../reference/runtime/sand-eval-runner.cjs#L546108-L546113) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:557664

Chamadas escritas diretamente neste corpo: `.some`, `factHolds`, `gates.some`.

SHA-256 do trecho: `b855d559f15803319f0abdba3c0b4a42dbd0f21a14bf4be792e6e7b8d9a782f7`.

### evaluation:546108

Chamadas escritas diretamente neste corpo: `.some`, `factHolds`, `gates.some`.

SHA-256 do trecho: `b855d559f15803319f0abdba3c0b4a42dbd0f21a14bf4be792e6e7b8d9a782f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
