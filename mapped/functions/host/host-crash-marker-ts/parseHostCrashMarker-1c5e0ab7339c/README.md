# `parseHostCrashMarker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-crash-marker.ts` · [README do módulo](../../../../modules/host/host-crash-marker-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:471457-471499](../../../../../reference/runtime/host-main.cjs#L471457-L471499) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471457-471499](../../../../../reference/runtime/host-main.cjs#L471457-L471499) | 15 | 0 | 0 | 10 | 0 | 0 |

### host:471457

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isFatalExitSignal`, `isNonNegativeFinite`, `parseFatalStartupMarker`, `parseJson`, `readCommonTimes`.

SHA-256 do trecho: `bdeaf37e69d2dbdb32ab4a6f6f46b89710f47aad3fa28a9006a80035737ea923`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
