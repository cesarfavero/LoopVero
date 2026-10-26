# `getBackendErrorDetailMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/agent-run-error.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/agent-run-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736753-736766](../../../../../../../reference/runtime/host-main.cjs#L736753-L736766) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736753-736766](../../../../../../../reference/runtime/host-main.cjs#L736753-L736766) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:736753

Chamadas escritas diretamente neste corpo: `BackendConnectErrors.backendDetails`, `detail.detail.trim`, `detail.title.trim`, `findBackendConnectError`.

SHA-256 do trecho: `edf0fad4cdfd9f5fe7cad4b991de3bacf9dc6755ad6c9c07a830c6ae42bfee1e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
