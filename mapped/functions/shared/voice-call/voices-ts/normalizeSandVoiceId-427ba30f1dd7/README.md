# `normalizeSandVoiceId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/voice-call/voices.ts` · [README do módulo](../../../../../modules/shared/voice-call/voices-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490722-490725](../../../../../../reference/runtime/host-main.cjs#L490722-L490725) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490722-490725](../../../../../../reference/runtime/host-main.cjs#L490722-L490725) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:490722

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `SAND_VOICES.find`, `raw.trim`.

SHA-256 do trecho: `13adf270349cd5413c806ad8a2fc636b5668b3020e44efc419261ce6ca608ec5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
