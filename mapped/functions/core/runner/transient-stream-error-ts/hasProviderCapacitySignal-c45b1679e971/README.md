# `hasProviderCapacitySignal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736369-736386](../../../../../../reference/runtime/host-main.cjs#L736369-L736386) | `FunctionDeclaration` | não | `error64, seen` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736369-736386](../../../../../../reference/runtime/host-main.cjs#L736369-L736386) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:736369

Chamadas escritas diretamente neste corpo: `Array.isArray`, `classifyError2`, `fields3.errors.some`, `hasProviderCapacitySignal`, `hasTransportErrno`, `seen.add`, `seen.has`.

SHA-256 do trecho: `2f1c364b53e68b55c9fa81889f2444e0563570a686dbba5d2fcfcf8b543bc99d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
