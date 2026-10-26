# `resolveOrbitCaptureEligibility`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/orbit-service.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706379-706402](../../../../../../../reference/runtime/host-main.cjs#L706379-L706402) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706379-706402](../../../../../../../reference/runtime/host-main.cjs#L706379-L706402) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:706379

Chamadas escritas diretamente neste corpo: `deps.auth.peekAccessToken`, `deps.experiments.checkFeatureGate`, `deps.privacyMode.get`, `parseJwtPayload`.

SHA-256 do trecho: `81f3a919a19d6ed7e55db2dca8b67e1622803fa858b6f999efd43f0c9fe57f75`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
