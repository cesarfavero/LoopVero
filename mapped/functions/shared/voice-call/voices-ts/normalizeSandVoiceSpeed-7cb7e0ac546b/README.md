# `normalizeSandVoiceSpeed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/voice-call/voices.ts` · [README do módulo](../../../../../modules/shared/voice-call/voices-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490767-490782](../../../../../../reference/runtime/host-main.cjs#L490767-L490782) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490767-490782](../../../../../../reference/runtime/host-main.cjs#L490767-L490782) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:490767

Chamadas escritas diretamente neste corpo: `Math.abs`, `Number.isFinite`, `Number.parseFloat`.

Alvos de atribuição ou incremento: `closest`, `closestDistance`, `speed`.

SHA-256 do trecho: `98e0fbca15b9f5ea39824f3d41ec60ea760625ab14d8715b6cce08df74526c4a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
