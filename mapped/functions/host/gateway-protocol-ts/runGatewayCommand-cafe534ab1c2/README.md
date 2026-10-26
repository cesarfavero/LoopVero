# `runGatewayCommand`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-protocol.ts` · [README do módulo](../../../../modules/host/gateway-protocol-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:489960-489966](../../../../../reference/runtime/host-main.cjs#L489960-L489966) | `FunctionDeclaration` | sim | `api, method, body, avatars` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489960-489966](../../../../../reference/runtime/host-main.cjs#L489960-L489966) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:489960

Chamadas escritas diretamente neste corpo: `[computed]`, `handlersOf`, `isSlimShapedMethod`, `parseGatewayCommandBody`, `slimAvatarOverrides`.

SHA-256 do trecho: `bdfac77b5e53fcae3ea13411b2aa11eddfe7087a03acd99927a147c1f262e315`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
