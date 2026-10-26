# `installShutdownHandlers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/main.ts` · [README do módulo](../../../../modules/host/main-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:787052-787083](../../../../../reference/runtime/host-main.cjs#L787052-L787083) | `FunctionDeclaration` | não | `host, gateway, hostLock, webAuthnProxyCredential` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:787052-787083](../../../../../reference/runtime/host-main.cjs#L787052-L787083) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:787052

Chamadas escritas diretamente neste corpo: `process.on`.

SHA-256 do trecho: `607cf39646ee9f80207914d2570242ba3e632eb6ed7bca2ff3ddc2dc105c1eab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
