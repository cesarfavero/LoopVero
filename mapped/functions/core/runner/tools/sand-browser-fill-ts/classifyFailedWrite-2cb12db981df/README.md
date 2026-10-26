# `classifyFailedWrite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727213-727219](../../../../../../../reference/runtime/host-main.cjs#L727213-L727219) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727213-727219](../../../../../../../reference/runtime/host-main.cjs#L727213-L727219) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:727213

Chamadas escritas diretamente neste corpo: `isFrameOriginDriverError`, `isHiddenTargetDriverError`, `isStaleRefDriverError`.

SHA-256 do trecho: `244f2a58e3d0bbb7413ac0be25930baef477182fc3110f2fb890da915e1a08cd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
