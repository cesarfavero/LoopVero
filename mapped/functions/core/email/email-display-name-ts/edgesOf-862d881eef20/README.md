# `edgesOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-display-name.ts` · [README do módulo](../../../../../modules/core/email/email-display-name-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715830-715872](../../../../../../reference/runtime/host-main.cjs#L715830-L715872) | `FunctionDeclaration` | não | `words2, {   affixes,   crossesWords }` |
| [evaluation:527499-527541](../../../../../../reference/runtime/sand-eval-runner.cjs#L527499-L527541) | `FunctionDeclaration` | não | `words, {   affixes,   crossesWords }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715830-715872](../../../../../../reference/runtime/host-main.cjs#L715830-L715872) | 5 | 4 | 0 | 1 | 0 | 0 |
| [evaluation:527499-527541](../../../../../../reference/runtime/sand-eval-runner.cjs#L527499-L527541) | 5 | 4 | 0 | 1 | 0 | 0 |

### host:715830

Chamadas escritas diretamente neste corpo: `affixes.find`, `new Uint8Array`, `pending.pop`, `pending.push`, `text3.endsWith`, `words2.join`.

Alvos de atribuição ou incremento: `end`, `first`, `lastStart`, `mayEnd[computed]`, `mayStart[computed]`, `start`.

SHA-256 do trecho: `1870f641cfdb9e22192b6fddacd06c56ec024ee1bcf030f42453ba065d41ae96`.

### evaluation:527499

Chamadas escritas diretamente neste corpo: `affixes.find`, `new Uint8Array`, `pending.pop`, `pending.push`, `text3.endsWith`, `words.join`.

Alvos de atribuição ou incremento: `end`, `first`, `lastStart`, `mayEnd[computed]`, `mayStart[computed]`, `start`.

SHA-256 do trecho: `021cda8b3f8048adf6b088dbb544467e9d18428c766babb93db5aa9098203074`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
