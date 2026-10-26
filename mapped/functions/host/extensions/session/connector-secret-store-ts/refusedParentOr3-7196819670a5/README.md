# `refusedParentOr3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/connector-secret-store.ts` · [README do módulo](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719281-719285](../../../../../../../reference/runtime/host-main.cjs#L719281-L719285) | `FunctionDeclaration` | não | `error64, folder` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719281-719285](../../../../../../../reference/runtime/host-main.cjs#L719281-L719285) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:719281

Chamadas escritas diretamente neste corpo: `.isSymbolicLink`, `findSystemErrno`, `new NoFollowRefusedError`.

SHA-256 do trecho: `fe1512326bf81d867d0a319bb686d08288311a57859960a21828d4c55f9c9e43`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
