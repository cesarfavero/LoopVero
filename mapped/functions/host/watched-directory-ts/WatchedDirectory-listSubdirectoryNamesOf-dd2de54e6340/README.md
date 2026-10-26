# `WatchedDirectory.listSubdirectoryNamesOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/watched-directory.ts` · [README do módulo](../../../../modules/host/watched-directory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684453-684462](../../../../../reference/runtime/host-main.cjs#L684453-L684462) | `method` | não | `directory` |
| [evaluation:627777-627786](../../../../../reference/runtime/sand-eval-runner.cjs#L627777-L627786) | `method` | não | `directory` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684453-684462](../../../../../reference/runtime/host-main.cjs#L684453-L684462) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:627777-627786](../../../../../reference/runtime/sand-eval-runner.cjs#L627777-L627786) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:684453

Chamadas escritas diretamente neste corpo: `.map`, `.sort`, `entries.filter`, `reportFallbackUnlessAbsent`.

Alvos de atribuição ou incremento: `entries`.

SHA-256 do trecho: `0444fda81caa5a6d8e44a222c9c071ce5a22944f1cff88101e0595997aa385d8`.

### evaluation:627777

Chamadas escritas diretamente neste corpo: `.map`, `.sort`, `entries.filter`, `reportFallbackUnlessAbsent`.

Alvos de atribuição ou incremento: `entries`.

SHA-256 do trecho: `263915e33164c9f411de1d999d7c120a18a7af88cd3e3f950defb64503297787`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
