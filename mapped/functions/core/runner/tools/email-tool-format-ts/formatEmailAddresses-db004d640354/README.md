# `formatEmailAddresses`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-tool-format.ts` · [README do módulo](../../../../../../modules/core/runner/tools/email-tool-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764145-764147](../../../../../../../reference/runtime/host-main.cjs#L764145-L764147) | `FunctionDeclaration` | não | `addresses` |
| [evaluation:557516-557518](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557516-L557518) | `FunctionDeclaration` | não | `addresses` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764145-764147](../../../../../../../reference/runtime/host-main.cjs#L764145-L764147) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557516-557518](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557516-L557518) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764145

Chamadas escritas diretamente neste corpo: `.join`, `addresses.map`.

SHA-256 do trecho: `c01f5ea050e7b24dd2d4305c178da8b8ae3492359e924e10ca1d96427c9db857`.

### evaluation:557516

Chamadas escritas diretamente neste corpo: `.join`, `addresses.map`.

SHA-256 do trecho: `c01f5ea050e7b24dd2d4305c178da8b8ae3492359e924e10ca1d96427c9db857`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
