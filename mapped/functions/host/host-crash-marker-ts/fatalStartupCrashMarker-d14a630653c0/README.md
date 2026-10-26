# `fatalStartupCrashMarker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-crash-marker.ts` · [README do módulo](../../../../modules/host/host-crash-marker-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:471503-471515](../../../../../reference/runtime/host-main.cjs#L471503-L471515) | `FunctionDeclaration` | não | `crash` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471503-471515](../../../../../reference/runtime/host-main.cjs#L471503-L471515) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:471503

Chamadas escritas diretamente neste corpo: `Math.max`, `errorLogTag`, `extensionStartErrorClass`.

SHA-256 do trecho: `2dfd10dce674beedcc8a8d9e9a237507c4378c0b1f30d110e62ce5f79d9380de`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
