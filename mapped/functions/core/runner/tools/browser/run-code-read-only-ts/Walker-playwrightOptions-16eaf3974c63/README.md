# `Walker.playwrightOptions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750113-750123](../../../../../../../../reference/runtime/host-main.cjs#L750113-L750123) | `method` | não | `node2, scope` |
| [evaluation:522964-522974](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522964-L522974) | `method` | não | `node2, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750113-750123](../../../../../../../../reference/runtime/host-main.cjs#L750113-L750123) | 3 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:522964-522974](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522964-L522974) | 3 | 1 | 0 | 0 | 0 | 0 |

### host:750113

Chamadas escritas diretamente neste corpo: `DENIED_PROPERTY_NAMES.has`, `fail2`, `isInlineFunction`, `propertyKeyName`, `this.playwrightValue`.

SHA-256 do trecho: `d1450207f34fa13fd9671fd5eb2001702bd28295d588c4267212aca961e0a84d`.

### evaluation:522964

Chamadas escritas diretamente neste corpo: `DENIED_PROPERTY_NAMES.has`, `fail`, `isInlineFunction`, `propertyKeyName`, `this.playwrightValue`.

SHA-256 do trecho: `eac7aa3ee9f056fd8d88ff702611a0bed7a8a189cf6825568a91f14501d5c004`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
