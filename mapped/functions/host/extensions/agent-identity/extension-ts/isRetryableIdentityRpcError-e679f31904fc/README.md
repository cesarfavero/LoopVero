# `isRetryableIdentityRpcError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496460-496462](../../../../../../../reference/runtime/host-main.cjs#L496460-L496462) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496460-496462](../../../../../../../reference/runtime/host-main.cjs#L496460-L496462) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:496460

Chamadas escritas diretamente neste corpo: `UNRETRYABLE_RPC_CODES.has`.

SHA-256 do trecho: `febd76d4465deea48ab435b53f79f4d53d635410600d0e32fab87201ac940a07`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
