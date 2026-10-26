# `toWhisperLanguageHint`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/transcribe-language.ts` · [README do módulo](../../../../../modules/shared/media/transcribe-language-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:681958-681961](../../../../../../reference/runtime/host-main.cjs#L681958-L681961) | `FunctionDeclaration` | não | `bcp47Tag` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681958-681961](../../../../../../reference/runtime/host-main.cjs#L681958-L681961) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:681958

Chamadas escritas diretamente neste corpo: `.split`, `WHISPER_1_LANGUAGE_HINTS.has`, `[computed].toLowerCase`, `bcp47Tag.trim`.

SHA-256 do trecho: `65d45e6d53c63bd1b11f2c248ea29ad252e35c60938ac0b858b065cd625296b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
