# `normalizeSandVoiceLanguage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/voice-call/voices.ts` · [README do módulo](../../../../../modules/shared/voice-call/voices-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490783-490798](../../../../../../reference/runtime/host-main.cjs#L490783-L490798) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490783-490798](../../../../../../reference/runtime/host-main.cjs#L490783-L490798) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:490783

Chamadas escritas diretamente neste corpo: `SAND_VOICE_LANGUAGES.filter`, `SAND_VOICE_LANGUAGES.find`, `lowered.split`, `raw.trim`, `trimmed.toLowerCase`.

SHA-256 do trecho: `1d40f891a13bd54e8e0106821924e475354f7b0c05474274d42a9358bff9e4e4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
